import CompletedTasks from "views/CompletedTask";
import DailySales from "views/DailySales";
import Dashboard from "views/Dashboard.js";
import TotalShipment from "views/TotalShipment";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/total-shipment",
    name: "Total Shipment",
    icon: "fas fa-shipping-fast", // Add an icon (FontAwesome used here)
    component: <TotalShipment />,
    layout: "/admin",
  },
  {
    path: "/daily-sales",
    name: "Daily Sales",
    icon: "fas fa-chart-line", // FontAwesome icon for sales
    component: <DailySales />,
    layout: "/admin",
  },
  {
    path: "/completed-task",
    name: "Completed Task",
    icon: "fas fa-tasks", // FontAwesome icon for sales
    component: <CompletedTasks />,
    layout: "/admin",
  },
];
export default routes;
