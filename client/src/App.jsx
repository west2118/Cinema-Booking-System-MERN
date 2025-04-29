import React, { useEffect } from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import axios from "axios";
import { fetchAllMovies } from "../store/movieSlice";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";
import ComingSoonMovies from "./pages/ComingSoonMovies";
import MoviesPage from "./pages/MoviesPage";
import TheaterPage from "./pages/TheaterPage";
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import MovieDetails from "./pages/MovieDetails";
import SeatSelection from "./pages/SeatSelection";
import CheckoutPage from "./pages/CheckoutPage";
import UserProfilePage from "./pages/UserProfilePage";
import AdminLayout from "./admin/components/AdminLayout";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminMovieData from "./admin/pages/AdminMovieData";
import AdminListMovies from "./admin/pages/AdminListMovies";
import AdminShowtimeData from "./admin/pages/AdminShowtimeData";
import AdminTheaterData from "./admin/pages/AdminTheaterData";
import AdminListTheaters from "./admin/pages/AdminListTheaters";
import { toFetchTheaters } from "../store/theaterSlice";
import AdminScreenData from "./admin/pages/AdminScreenData";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="coming-soon" element={<ComingSoonMovies />} />
        <Route path="theaters" element={<TheaterPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="movie/details/:id" element={<MovieDetails />} />
        <Route path="booking/seats" element={<SeatSelection />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="profile" element={<UserProfilePage />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="add-movie" element={<AdminMovieData />} />
        <Route path="add-showtime" element={<AdminShowtimeData />} />
        <Route path="add-theater" element={<AdminTheaterData />} />
        <Route path="add-screen" element={<AdminScreenData />} />
        <Route path="list-movies" element={<AdminListMovies />} />
        <Route path="list-theaters" element={<AdminListTheaters />} />
        <Route path="list-movies" element={<AdminListMovies />} />
        <Route
          path="edit-movie/:id"
          element={<AdminMovieData isEdit={true} />}
        />
        <Route
          path="edit-showtime"
          element={<AdminShowtimeData isEdit={true} />}
        />
        <Route
          path="edit-theater/:id"
          element={<AdminTheaterData isEdit={true} />}
        />
      </Route>
    </>
  )
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieResponse = await axios.get(
          "http://localhost:8080/api/movie"
        );
        dispatch(fetchAllMovies(movieResponse.data));

        const theaterResponse = await axios.get(
          "http://localhost:8080/api/theater"
        );
        dispatch(toFetchTheaters(theaterResponse.data));
      } catch (error) {
        toast.error(error.response?.data?.message || error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
