import React, { PureComponent } from "react";
import "../styles/Admin/Iventry.css"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Text
} from "@chakra-ui/react";
import {
  Grid,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Popover,
} from "@chakra-ui/react";

import { timeDurations } from "../utils/Variables";
import { getDefaultDateRange } from "../utils/Helpers";
import { FaCalendarAlt } from "react-icons/fa";
import { useState, useEffect } from "react";

function Chart({ data, dates, setDates, title }) {
  const primaryColor = "#A03232";
  const [orders, setOrders] = useState();
  const Colors = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7f50",
    "#b6a2de",
    "#ff6347",
  ];

  return (
    <>
      <div className="buttons_div">
        <ButtonGroup spacing="2" mb="4" overflowX={"scroll"}>
          {timeDurations.map((item, index) => {
            return (
              <Button
                onClick={() => setDates(getDefaultDateRange(item))}
                colorScheme={dates.timeDuration === item ? "info" : "gray"}
                size={"sm"}
                key={index}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Button>
            );
          })}
          <Popover>
            <PopoverTrigger>
              <IconButton
                size={"sm"}
                icon={<FaCalendarAlt />}
                aria-label="Select Date Range"
              />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Select Date Range</PopoverHeader>
              <PopoverBody>
                <FormControl>
                  <FormLabel>Start Date</FormLabel>
                  <Input
                    type="date"
                    value={dates.start}
                    onChange={(e) =>
                      setDates({ ...dates, start: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl mt="2">
                  <FormLabel>End Date</FormLabel>
                  <Input
                    type="date"
                    value={dates.end}
                    onChange={(e) =>
                      setDates({ ...dates, end: e.target.value })
                    }
                  />
                </FormControl>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </ButtonGroup>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: -20,
            bottom: 0,
          }}
        >
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="count"
            stroke={primaryColor}
            fill={primaryColor}
          />
        </AreaChart>
      </ResponsiveContainer>
      <Text fontWeight={"bold"} textAlign={"center"}>
        {title}: {new Date(dates.start).toLocaleDateString()} -{" "}
        {new Date(dates.end).toLocaleDateString()}{" "}
      </Text>
    </>
  );
}

export default Chart;
