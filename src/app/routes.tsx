import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Shop } from "./pages/Shop";
import { Mishti } from "./pages/Mishti";
import { MishtiNew } from "./pages/MishtiNew";
import { Journal } from "./pages/Journal";
import { JournalArticle } from "./pages/JournalArticle";
import { Dashboard } from "./pages/Dashboard";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { OrderConfirmation } from "./pages/OrderConfirmation";
import { ProductDetail } from "./pages/ProductDetail";
import { ServiceDetail } from "./pages/ServiceDetail";
import { DestinationPortal } from "./pages/DestinationPortal";
import { BookingReview } from "./pages/BookingReview";
import { BookingConfirmation } from "./pages/BookingConfirmation";
import { BookingReschedule } from "./pages/BookingReschedule";
import { Team } from "./pages/Team";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "service/:id", Component: ServiceDetail },
      { path: "shop", Component: Shop },
      { path: "product/:id", Component: ProductDetail },
      { path: "mishti", Component: MishtiNew },
      { path: "mishti-old", Component: Mishti },
      { path: "journal", Component: Journal },
      { path: "journal/:id", Component: JournalArticle },
      { path: "dashboard", Component: Dashboard },
      { path: "cart", Component: Cart },
      { path: "checkout", Component: Checkout },
      { path: "order-confirmation", Component: OrderConfirmation },
      { path: "destination-portal", Component: DestinationPortal },
      { path: "booking-review", Component: BookingReview },
      { path: "booking-confirmation", Component: BookingConfirmation },
      { path: "booking-reschedule", Component: BookingReschedule },
      { path: "team", Component: Team },
      { path: "*", Component: NotFound },
    ],
  },
]);