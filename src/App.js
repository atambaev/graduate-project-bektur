import Toastify from "./components/Toastify/Toastify";
import TripContextProvider from "./contexts/TripContextProvider";
import MyRoutes from "./MyRoutes";
import CartContextProvider from "./contexts/CartContextProvider";
import FavContextProvider from "./contexts/FavContextProvider";
import CommentContextProvider from "./contexts/CommentContextProvider";
import AuthContextProvider from "./contexts/AuthContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <CommentContextProvider>
        <FavContextProvider>
          <CartContextProvider>
            <TripContextProvider>
              <Toastify />
              <MyRoutes />
            </TripContextProvider>
          </CartContextProvider>
        </FavContextProvider>
      </CommentContextProvider>
    </AuthContextProvider>
  );
}

export default App;
