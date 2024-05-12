import React, { useState } from "react";
import { useSelector } from "react-redux";
import img from "../../assets/images/payment.svg";
import { Link } from "react-router-dom";
const initialState = {
  firstName: "",
  lastName: "",
  countery: "",
  city: "",
  street: "",
  state: "",
  zip: "",
  email: "",
  number: "",
};

const Checkout = () => {
  const [user, setUser] = useState(initialState);
  let data = useSelector((s) => s.cart.value);
  let total = data?.reduce(
    (acc, el) => acc + Math.round(el.price) * el.soni,
    0
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <section>
      <div className="container">
        <div className="url">
          <Link to={"/"}>Home</Link>/<Link to={"/product-checkout"}>Shop</Link>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="container checkout">
          <span className="left">
            <h3>Billing Address</h3>
            <div className="checkout__form">
              <div className="inp">
                <label htmlFor="firtName">First Name *</label>
                <input
                  value={user.firstName}
                  onChange={(e) =>
                    setUser({ ...user, firstName: e.target.value })
                  }
                  type="text"
                  required
                  placeholder="First Name"
                  name="first-name"
                  id="firtName"
                />
              </div>
              <div className="inp">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  value={user.lastName}
                  onChange={(e) =>
                    setUser({ ...user, lastName: e.target.value })
                  }
                  type="text"
                  required
                  placeholder="Last Name"
                  name="last-name"
                  id="lastName"
                />
              </div>
              <div className="inp">
                <label htmlFor="region">Country / Region *</label>
                <input
                  value={user.countery}
                  onChange={(e) =>
                    setUser({ ...user, countery: e.target.value })
                  }
                  type="text"
                  required
                  placeholder="Select a country / region"
                  name="region"
                  id="region"
                />
              </div>
              <div className="inp">
                <label htmlFor="city">Town / City *</label>
                <input
                  value={user.city}
                  onChange={(e) => setUser({ ...user, city: e.target.value })}
                  type="text"
                  required
                  placeholder="Town / City"
                  name="city"
                  id="city"
                />
              </div>
              <div className="inp">
                <label htmlFor="street">Street Address *</label>
                <input
                  value={user.street}
                  onChange={(e) => setUser({ ...user, street: e.target.value })}
                  type="text"
                  required
                  placeholder="House number and street name"
                  name="street"
                  id="street"
                />
              </div>
              <div className="inp">
                <label htmlFor="unit">Appartment, suite, unit, etc</label>
                <input
                  type="text"
                  placeholder="Appartment, suite, unit, etc. (optional)"
                  name="unit"
                  id="unit"
                />
              </div>
              <div className="inp">
                <label htmlFor="state">State *</label>
                <select
                  value={user.state}
                  onChange={(e) => setUser({ ...user, state: e.target.value })}
                  required
                  name="state"
                  id="state"
                >
                  <option value="Select a state">Select a state</option>
                  <option value="Select a state">Select a state1</option>
                </select>
              </div>
              <div className="inp">
                <label htmlFor="zip">Zip *</label>
                <input
                  value={user.zip}
                  onChange={(e) => setUser({ ...user, zip: e.target.value })}
                  type="text"
                  required
                  placeholder="Zip"
                  name="zip"
                  id="zip"
                />
              </div>
              <div className="inp">
                <label htmlFor="email">Email address *</label>
                <input
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  type="email"
                  required
                  placeholder="Email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="inp">
                <label htmlFor="tel">Phone Number *</label>
                <select
                  value={user.number}
                  onChange={(e) => setUser({ ...user, number: e.target.value })}
                  required
                  name="tel"
                  id="tel"
                >
                  <option value="Select a state">+966</option>
                  <option value="Select a state">+998</option>
                </select>
              </div>
              <div className="checkbox">
                <input type="checkbox" id="checkbox" required />
                <label htmlFor="checkbox">Ship to a different address?</label>
              </div>
              <div></div>
              <div className="inp">
                <label htmlFor="notes">Order notes (optional)</label>
                <textarea rows={8} name="notes" id="notes"></textarea>
              </div>
            </div>
          </span>
          <span className="right">
            <h3>Your Order</h3>
            <table>
              <thead>
                <tr
                  style={{
                    background: "#fff",
                    borderBottom: "1px solid #46a358",
                    paddingBottom: "10px",
                  }}
                >
                  <th>Products</th>
                  <th></th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((el) => (
                  <tr key={el.id}>
                    <td>
                      <img src={el.image} alt={el.title} />
                      <p title={el.title}>{el.title}</p>
                    </td>
                    <td className="qny">(x {el.soni})</td>
                    <td className="price">$ {Math.round(el.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <p>Subtotal</p>
              <span>$ {total}</span>
            </div>
            <div>
              <p>Coupon Discount</p>
              <span>(-) 00.00</span>
            </div>
            <div>
              <p>Shiping</p>
              <span>$16.00</span>
            </div>
            <div className="total">
              <h3>Total</h3>
              <span>$ {total}</span>
            </div>
            <div className="tolov">
              <div className="checkbox">
                <input type="radio" required id="payment" name="pay" />
                <label htmlFor="payment">
                  <img src={img} alt="" />
                </label>
              </div>
              <div className="checkbox">
                <input type="radio" required id="bank" name="pay" />
                <label htmlFor="bank">Dorect bank transfer</label>
              </div>
              <div className="checkbox">
                <input type="radio" required id="cash" name="pay" />
                <label htmlFor="cash">Cash on delivery</label>
              </div>
              <button>Place Order</button>
            </div>
          </span>
        </div>
      </form>
    </section>
  );
};

export default Checkout;
