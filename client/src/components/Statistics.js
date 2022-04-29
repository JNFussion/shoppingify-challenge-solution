/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { selectSavedShoppingLists } from "../features/historySlice";

function getTotalItems(arr) {
  return arr.reduce((prev, shoppingList) => {
    prev += shoppingList.items.reduce((prevItem, item) => {
      prevItem += item.qty;
      return prevItem;
    }, 0);
    return prev;
  }, 0);
}

function getTotalSumItems(arr) {
  const aux = arr.reduce((prev, shoppingList) => {
    prev.push(
      shoppingList.items.reduce((obj, item) => {
        obj[item.name] = item.qty;
        return obj;
      }, {})
    );
    return prev;
  }, []);

  const total = {};

  aux.flat().forEach((item) => {
    Object.keys(item).forEach((key) => {
      if (total[key]) {
        total[key] += item[key];
      } else {
        total[key] = item[key];
      }
    });
  });
  return total;
}

function getTotalSumCategories(arr) {
  const aux = arr.reduce((prev, shoppingList) => {
    prev.push(
      shoppingList.items.reduce((obj, item) => {
        if (obj[item.category.name]) {
          obj[item.category.name] += item.qty;
        } else {
          obj[item.category.name] = item.qty;
        }
        return obj;
      }, {})
    );
    return prev;
  }, []);

  const total = {};

  aux.flat().forEach((item) => {
    Object.keys(item).forEach((key) => {
      if (total[key]) {
        total[key] += item[key];
      } else {
        total[key] = item[key];
      }
    });
  });
  return total;
}

function getTotalSumMonths(arr) {
  const aux = arr.reduce((prev, shoppingList) => {
    prev.push(
      shoppingList.items.reduce((obj, item) => {
        if (obj[format(new Date(shoppingList.completionDate), "MMMM")]) {
          obj[format(new Date(shoppingList.completionDate), "MMMM")] +=
            item.qty;
        } else {
          obj[format(new Date(shoppingList.completionDate), "MMMM")] = item.qty;
        }
        return obj;
      }, {})
    );
    return prev;
  }, []);

  const total = {};

  aux.flat().forEach((item) => {
    Object.keys(item).forEach((key) => {
      if (total[key]) {
        total[key] += item[key];
      } else {
        total[key] = item[key];
      }
    });
  });
  return total;
}

function getTop(arr, type) {
  let totalSum;
  if (type === "items") {
    totalSum = getTotalSumItems(arr);
  } else if (type === "categories") {
    totalSum = getTotalSumCategories(arr);
  }

  const top = [];
  Object.keys(totalSum).forEach((key) => {
    top.push({ name: key, qty: totalSum[key] });
  });
  return top.sort((a, b) => b.qty - a.qty);
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Statistics() {
  const savedShoppingLists = useSelector(selectSavedShoppingLists);
  const [numTotalItems, setNumTotalItems] = useState(
    getTotalItems(savedShoppingLists)
  );
  const [topItems, setTopItems] = useState(
    getTop(savedShoppingLists, "items").slice(0, 3)
  );
  const [topCategories, setTopCategories] = useState(
    getTop(savedShoppingLists, "categories").slice(0, 3)
  );
  const [totalSumMonths, setTotalSumMonths] = useState(
    getTotalSumMonths(savedShoppingLists)
  );

  const [data, setData] = useState({
    labels,
    datasets: [
      {
        label: "items",
        data: labels.map((label) => totalSumMonths[label]),
        borderColor: "#F9A109",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  });

  useEffect(() => {
    setNumTotalItems(getTotalItems(savedShoppingLists));
    setTopItems(getTop(savedShoppingLists, "items").slice(0, 3));
    setTopCategories(getTop(savedShoppingLists, "categories").slice(0, 3));
    setTotalSumMonths(getTotalSumMonths(savedShoppingLists));
    return () => {};
  }, [savedShoppingLists]);

  useEffect(() => {
    setData({
      labels,
      datasets: [
        {
          label: "items",
          data: labels.map((label) => totalSumMonths[label]),
          borderColor: "#F9A109",
          backgroundColor: "rgba(249, 161, 9, 0.5)",
        },
      ],
    });
    return () => {};
  }, [totalSumMonths]);

  return (
    <article className="max-w-[1440px] max-h-screen overflow-y-scroll flex-1 px-3 py-7 lg:px-28 lg:py-12">
      <div className="flex flex-wrap gap-16">
        <section className="flex-1">
          <h2 className="text-2xl">Top items</h2>
          <div className="py-9">
            {topItems.map((item) => (
              <article className="py-4">
                <header className="flex items-center justify-between">
                  <h3 className="capitalize">{item.name}</h3>
                  <p>
                    {Math.round(
                      ((item.qty / numTotalItems) * 100 + Number.EPSILON) * 100
                    ) / 100}{" "}
                    %
                  </p>
                </header>
                <div className="grid my-4">
                  <div
                    id="top"
                    className="col-start-1 row-start-1 z-10 h-2 rounded bg-orange-web"
                    style={{ width: `${(item.qty / numTotalItems) * 100}%` }}
                  />
                  <div
                    id="background"
                    className="col-start-1 row-start-1 h-2 rounded bg-gainsboro"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="flex-1">
          <h2 className="text-2xl">Top Categories</h2>
          <div className="py-9">
            {topCategories.map((category) => (
              <article className="py-4">
                <header className="flex items-center justify-between">
                  <h3 className="capitalize">{category.name}</h3>
                  <p>
                    {Math.round(
                      ((category.qty / numTotalItems) * 100 + Number.EPSILON) *
                        100
                    ) / 100}{" "}
                    %
                  </p>
                </header>
                <div className="grid my-4">
                  <div
                    id="top"
                    className="col-start-1 row-start-1 z-10 h-2 rounded bg-orange-web"
                    style={{
                      width: `${(category.qty / numTotalItems) * 100}%`,
                    }}
                  />
                  <div
                    id="background"
                    className="col-start-1 row-start-1 h-2 rounded bg-gainsboro"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
      <section>
        <h2 className="text-2xl">Monthly Summary</h2>
        <div>
          <Line options={options} data={data} />
        </div>
      </section>
    </article>
  );
}

export default Statistics;
