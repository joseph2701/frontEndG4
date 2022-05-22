import { useState } from "react";
import { Dropdown } from "../dropdown/dropdown";
import { NavLink, fill } from "react-router-dom";
import { Nav } from "../nav/nav";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./header.scss";
import { useSelector } from "react-redux";

export function Header() {
  const [toggleLogin, setToggleLogin] = useState(true);
    const user = useSelector((state) => state.auth.user);
    const isLogin = useSelector((state)=>state.auth.isLogin);
      
  const [valueSearch, setValueSearch] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  function getSearch(value) {
    // llaamda api del servidor /search

    const results = [
      {
        id: 1,
        image:
          "https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg",
        title: "LEON COLOR",
        description: "Leon colorido de logo",
        url: "",
      },
      {
        id: 2,
        image:
          "https://www.tailorbrands.com/wp-content/uploads/2020/07/twitter-logo.jpg",
        title: "Twitter logo",
        description: "Logo de twitter para usa",
        url: "",
      },
      {
        id: 3,
        image:
          "https://images.squarespace-cdn.com/content/v1/5f62b687cae73d2408a06539/1602807735303-4W086W30YX6B3D23N04L/image-asset.png",
        title: "Logo fedex",
        description: "Logo de empresa fedex",
        url: "",
      },
      {
        id: 4,
        image:
          "https://www.definicionabc.com/wp-content/uploads/2013/11/Logo.png",
        title: "Starbucks",
        description: "Logo de starbucks",
        url: "",
      },
      {
        id: 5,
        image:
          "https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg",
        title: "LEON COLOR",
        description: "Leon colorido de logo",
        url: "",
      },
      {
        id: 6,
        image:
          "https://www.tailorbrands.com/wp-content/uploads/2020/07/twitter-logo.jpg",
        title: "Twitter logo",
        description: "Logo de twitter para usa",
        url: "",
      },
      {
        id: 7,
        image:
          "https://images.squarespace-cdn.com/content/v1/5f62b687cae73d2408a06539/1602807735303-4W086W30YX6B3D23N04L/image-asset.png",
        title: "Logo fedex",
        description: "Logo de empresa fedex",
        url: "",
      },
      {
        id: 8,
        image:
          "https://www.definicionabc.com/wp-content/uploads/2013/11/Logo.png",
        title: "Starbucks",
        description: "Logo de starbucks",
        url: "",
      },
      {
        id: 9,
        image:
          "https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg",
        title: "LEON COLOR",
        description: "Leon colorido de logo",
        url: "",
      },
      {
        id: 10,
        image:
          "https://www.tailorbrands.com/wp-content/uploads/2020/07/twitter-logo.jpg",
        title: "Twitter logo",
        description: "Logo de twitter para usa",
        url: "",
      },
      {
        id: 11,
        image:
          "https://images.squarespace-cdn.com/content/v1/5f62b687cae73d2408a06539/1602807735303-4W086W30YX6B3D23N04L/image-asset.png",
        title: "Logo fedex",
        description: "Logo de empresa fedex",
        url: "",
      },
      {
        id: 12,
        image:
          "https://www.definicionabc.com/wp-content/uploads/2013/11/Logo.png",
        title: "Starbucks",
        description: "Logo de starbucks",
        url: "",
      },
    ];

    dispatch({
      type: "SET_SEARCH",
      payload: results,
    });
    history.push("/catalog");
  }

  return (
    <header className="header">
      <NavLink className="header_logo flex item-center justify-center " to="/">
        My E-Shop
      </NavLink>
      <div className="flex flex-col">
         <div className="flex items-center justify-center">           
        <div className="w-full">      
            <form
              onSubmit={(evt) => {
                evt.preventDefault();
                getSearch(valueSearch);
              }}
              className="flex items-center justify-center border-2 rounded-bl-full w-full">
              <div className="flex justify-content w-full">
              <input
                type="text"
                className="header_input_search text-3xl text-black bg-cyan-50  w-full py-6 px-6 "
                placeholder="Search..."
                value={valueSearch}
                onChange={(evt) => setValueSearch(evt.target.value)}
              />
              <button className="flex items-center justify-center px-8 py-8 border-l bg-cyan-50">
                <svg
                  className="w-6 h-6 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
              </button>
              </div>
            </form>
          </div>
        </div>
        <Nav />
      </div>
      <div className="w-3/12 flex items-center justify-center">
      {user ? (
          <li>
            <span
              onClick={() => {
                setToggleLogin(!toggleLogin);
                console.log("valor del toggle",toggleLogin);
              }}
            >
              Bienvenido {user.name}
            </span>
            {toggleLogin && (
              <Dropdown
                items={[
                  {
                    url: "/logout",
                    text: "logout",
                  },
                ]}
              />
            )}
          </li>
        ) : (
          <li>
            <NavLink to="/login" activeClassName="is-active" className="header_login">
              Login
            </NavLink>
          </li>
        )}   
             
        <img
          className="header_buy_car"
          src="https://image.flaticon.com/icons/png/512/107/107831.png"
        ></img>
      </div>
      
    </header>
  );
}
