import AdminSidebar from "../../components/Admin/AdminSidebar";
import "../../styles/Admin/Iventry.css";
import { FaClipboardList, FaListAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiCaretUp, BiCaretDown } from "react-icons/bi";
import { useState, useEffect } from "react";
import axios from "axios";
import Chart from "../../common/Chart";
import { getDefaultDateRange } from "../../utils/Helpers";

function Iventry() {
  const [growth, setGrowth] = useState();
  const [month, setMonth] = useState();
  const [monthbefore, setMonthbefore] = useState();
  const [growthPercentage, setGrowthPercentage] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState();
  const [pending, setPending] = useState();
  const status = "success";
  const status2 = "pending";
  const [dates, setDates] = useState(getDefaultDateRange("monthly"));
  const [ordersChart, setOrdersChart] = useState([]);
  const [expense,setExpense]=useState()

  const ChartOrders = () => {
    const queryParams = new URLSearchParams({
      timeDuration: dates.timeDuration,
      dateField: "date_created",
      startDate: dates.start,
      endDate: dates.end,
    });

    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/order/transaction-counts-over-time`,
        { params: queryParams }
      )
      .then((resp) => {
        setOrdersChart(resp.data.data);
        console.log(resp.data.data);
      });
  };


  const monthBefore = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/order/monthbefore`)
      .then((resp) => {
        const sortedOrders = resp.data.map((price) => price.subtotal);
        const filteredUndefined = sortedOrders.filter(
          (subtotal) => subtotal !== undefined
        );
        const total = filteredUndefined.reduce((acc, curr) => acc + curr, 0);
        setMonthbefore(total);
      });
  };

  const lastMonthSales = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/order/month`).then((resp) => {
      const totalSales = resp.data.map((sales) => sales.subtotal);
      const filteredUndefined = totalSales.filter(
        (subtotal) => subtotal !== undefined
      );
      const total = filteredUndefined.reduce((acc, curr) => acc + curr, 0);
      setMonth(total);
    });
  };

  const DeclinedOrders = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/order/status?status=${status2}`)
      .then((resp) => {
        // console.log(resp.data);
        setPending(resp.data);
      });
  };

  const TotalGrowth = () => {
    setGrowth(month - monthbefore);
    setGrowthPercentage(((month - monthbefore) / monthbefore) * 100);
    setPaymentStatus(month-expense)
  };

  const Expenses =()=>{
    axios
    .get(`${process.env.REACT_APP_BASE_URL}/expense/`)
    .then((resp) => {
      // console.log(resp.data);
      const totalEx = resp.data.map((amt)=>amt.amount)
      const total = totalEx.reduce((acc,curr)=> acc + curr,0);
      console.log(total)
      setExpense(total);
    });
  }

  useEffect(() => {
    TotalGrowth();
  }, [month, monthbefore]);

  useEffect(() => {
    lastMonthSales();
    monthBefore();
    // MonthlyEarnings();
    DeclinedOrders();
    Expenses()
  }, []);

  useEffect(() => {
    ChartOrders();
  }, [dates]);
  return (
    <div>
      <div className="d-flex">
        <AdminSidebar />
        <div className="iventory-container">
          <h4 className="">Order Management & Supplies </h4>
          <hr className="dashboard-line" />

          <div className="category-container">
            <div className="icon-container mb-3">
              <div className="icon-container-innerd1">
                <FaClipboardList className="clipboard-icon" />
              </div>
              <div className="icon-container-innerd2">
                <p> Growth</p>
                <p>{growth || 0}</p>
              </div>
            </div>
            <div className="icon-container mb-3">
              <div className="icon-container-innerd1">
                <FaClipboardList className="clipboard-icon" />
              </div>
              <div className="icon-container-innerd2">
                <Link className="order-dashboard-link">
                  <p> Declined Orders</p>
                  <p>{pending?.length > 0 || 0}</p>
                </Link>
              </div>
            </div>
            <div className="icon-container mb-3">
              <div className="icon-container-innerd1">
                <FaClipboardList className="clipboard-icon" />
              </div>
              <div className="icon-container-innerd2">
                <Link className="order-dashboard-link">
                  <p>Monthly Sales</p>
                  <p>{month || 0}</p>
                </Link>
              </div>
            </div>

            <div className="icon-container mb-3">
              <div className="icon-container-innerd1">
                <FaClipboardList className="clipboard-icon" />
              </div>
              <div className="icon-container-innerd2">
                <Link className="order-dashboard-link">
                  <p>Monthly Earning</p>
                  <p>{paymentStatus || 0}</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="chart_container">
            <Chart
              backgroundColor={"white"}
              data={ordersChart}
              dates={dates}
              setDates={setDates}
              title="Orders"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Iventry;
