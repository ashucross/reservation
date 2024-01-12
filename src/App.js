import React from "react";
import "./App.css";

function App() {
  const data = [
    {
      id: "1",
      type: "D",
      room: "1",
      date: "120",
      date1: "130",
      date2: "160",
      date3: "130",
      date4: "160",
      date5: "120",
      date6: "120",
      date7: "120",
      color: "lightblue",
    },
    {
      id: "1",
      type: "D",
      room: "2",
      date: "120",
      date1: "130",
      date2: "160",
      date3: "130",
      date4: "160",
      date5: "120",
      date6: "120",
      date7: "120",
      color: "lightblue",
    },
    {
      id: "1",
      type: "EQA",
      room: "3",
      date: "120",
      date1: "130",
      date2: "160",
      date3: "130",
      date4: "160",
      date5: "120",
      date6: "120",
      date7: "120",
      color: "lightblue",
    },
    {
      id: "1",
      type: "SPA",
      room: "4",
      date: "120",
      date1: "130",
      date2: "160",
      date3: "130",
      date4: "160",
      date5: "120",
      date6: "120",
      date7: "120",
      color: "pink",
    },
    {
      id: "1",
      type: "SPA",
      room: "5",
      date: "120",
      date1: "130",
      date2: "160",
      date3: "130",
      date4: "160",
      date5: "120",
      date6: "120",
      date7: "120",
      color: "pink",
    },
    {
      id: "1",
      type: "F",
      room: "6",
      date: "120",
      date1: "130",
      date2: "160",
      date3: "130",
      date4: "160",
      date5: "120",
      date6: "120",
      date7: "120",
      color: "green",
      border: "2px solid black",
    },
    {
      id: "1",
      type: "F",
      room: "7",
      date: "120",
      date1: "130",
      date2: "160",
      date3: "130",
      date4: "160",
      date5: "120",
      date6: "120",
      date7: "120",
      color: "green",
    },
    {
      id: "1",
      type: "D",
      room: "8",
      date: "120",
      date1: "130",
      date2: "160",
      date3: "130",
      date4: "160",
      date5: "120",
      date6: "120",
      date7: "120",
      color: "lightblue",
    },
    {
      id: "1",
      type: "SPA",
      room: "4",
      date: "120",
      date1: "130",
      date2: "160",
      date3: "130",
      date4: "160",
      date5: "120",
      date6: "120",
      date7: "120",
      color: "pink",
    },
    {
      id: "1",
      type: "SPA",
      room: "5",
      date: "120",
      date1: "130",
      date2: "160",
      date3: "130",
      date4: "160",
      date5: "120",
      date6: "120",
      date7: "120",
      color: "pink",
    },
    {
      id: "1",
      type: "F",
      room: "6",
      date: "120",
      date1: "130",
      date2: "160",
      date3: "130",
      date4: "160",
      date5: "120",
      date6: "120",
      date7: "120",
      color: "green",
      border: "2px solid black",
    },
    {
      id: "1",
      type: "F",
      room: "7",
      date: "120",
      date1: "130",
      date2: "160",
      date3: "130",
      date4: "160",
      date5: "120",
      date6: "120",
      date7: "120",
      color: "green",
    },
    {
      id: "1",
      type: "D",
      room: "8",
      date: "120",
      date1: "130",
      date2: "160",
      date3: "130",
      date4: "160",
      date5: "120",
      date6: "120",
      date7: "120",
      color: "lightblue",
    },
  ];
  return (
    <div className="app">
      <div class="header">
        <div class="row">
          <div class="col-md-4">
            <p class="titletext">
              <i class="fa fa-hamburger"></i> Sapphite City Motor Inn [Logged-in
              : Scminn]
            </p>
          </div>
          <div class="col-md-8 text-right">
            <p class="titletext">
              <span class="bg-success">
                <i class="fa fa-search"></i> <a class="text-white" href="#">Booking Search</a>
              </span>{" "}
              <a class="text-white" href="#">
                <i class="fa fa-home" title="Dashboard"> </i>
                </a>
                &nbsp;&nbsp;
                <a class="text-white" title="Housekeeping" href="#">
                <i class="fa fa-utensils"> </i> 
                </a>
                &nbsp;&nbsp;
                <a class="text-white" href="#" title="Trading Summary">
                <i class="fa fa-dollar" aria-hidden="true"></i>
                </a>
                &nbsp;&nbsp; 
                <a class="text-white" href="#" title="Calendar">
                <i class="fa fa-calendar"> </i> 
                </a>
                &nbsp;&nbsp;  
              <a class="text-white" href="#" title="Emails">
                <i class="fa fa-envelope"> </i> 
                </a>
                &nbsp;&nbsp; 
                <a class="text-white" href="#" title="Rates">
                <i class="fa fa-money"> </i> 
                 Rates 
                 </a>
                 &nbsp;&nbsp; 
                 <a class="text-white" href="#" title="Add Bookings">
                <i class="fa fa-plus"> </i> 
                &nbsp;Booking
                 </a>
                 &nbsp;&nbsp; 
                 <a class="text-white" href="#" title="Create Invoice">
                <i class="fa fa-file"> </i>  
                </a>
                &nbsp;&nbsp; 
                <a class="text-white" href="#" title="Logout">
                <i class="fa fa-sign-out"> </i>  
                </a>
            </p>
          </div>
        </div>
      </div>
      <div class="header_second">
        <div class="row ">
          <div class="col-md-1">
            <p class="titletext_second  ml-2">
              &nbsp;<i class="fa fa-arrow-left"></i>
            </p>
          </div>
          <div class="col-md-10">
            <div class="margintop d-flex">
              <input type="date" name="" class="inputline form-control"></input>
              &nbsp;<button class="btn btn-success">Reg form</button>
              &nbsp;<button class="btn btn-success">Out 3</button>
              &nbsp;<button class="btn btn-success">In 1</button>
              &nbsp;
              <select class="btn btn-success">
                <option>Select</option>
              </select>
              &nbsp;
              <input
                type="text"
                placeholder="LN/PH/Email "
                class="inputlinetwo form-control"
                ></input>
                &nbsp;
                <button class="btn btn-success">
                <i class="fa fa-arrow-left"></i>
              </button>
                &nbsp;
                <button class="btn btn-success">
                <i class="fa fa-expand"></i>
              </button>
                &nbsp;
                <button class="btn btn-success">
                T
              </button>
                &nbsp;
                <button class="btn btn-success">
                Y
              </button>
                &nbsp;
                <button class="btn btn-success">
                <i class="fa fa-refresh"></i>
              </button>
                &nbsp;
                <button class="btn btn-success">
                <i class="fa fa-dollar"></i>
              </button>
              &nbsp;
                <button class="btn btn-success">
                <i class="fa fa-arrow-right"></i>
              </button>
            </div> 
          </div>
          <div class="col-md-1">
            <p class="titletext_second  ml-2">
            <div class="margintop d-flex">
              <input type="date" name="" class="inputline form-control"></input>
              &nbsp;<i class="fa fa-arrow-right"></i>
              </div>
            </p>
          </div>
        </div>
      </div>
      <table className="data-table">
            <thead> 
              <tr>
                <th style={{ background: "#c9c9c9" }}>Sort By</th>
                <th style={{ background: "#c9c9c9" }}>Sort By</th>
                <th style={{ background: "white" }}> </th>
                <th style={{ background: "white" }}> </th>
                <th style={{ background: "white" }}> </th>
                <th style={{ background: "white" }}>Christmas Day</th>
                <th style={{ background: "white" }}>Booking Day</th>
                <th style={{ background: "white" }}> </th>
                <th style={{ background: "white" }}> </th>
              </tr>
              <tr>
                <th style={{ background: "#c9c9c9" }}>Type</th>
                <th style={{ background: "green" }}>Room</th>
                <th style={{ background: "green" }}>Thursday 22 Dec</th>
                <th style={{ background: "#c9c9c9" }}>Friday 23 Dec</th>
                <th style={{ background: "#c9c9c9" }}>Saturday 24 Dec</th>
                <th style={{ background: "red" }}>Sunday 25 Dec</th>
                <th style={{ background: "red" }}>Monday 26 Dec</th>
                <th style={{ background: "#c9c9c9" }}>Tuesday 27 Dec</th>
                <th style={{ background: "#c9c9c9" }}>Wedenesday 28 Dec</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id}>
                  <td style={{ background: row.color }}>{row.type}</td>
                  <td>{row.room}</td>
                  <td style={{ "text-align": "center" }}>{row.date}</td>
                  <td style={{ "text-align": "center" }}>{row.date2}</td>
                  <td style={{ "text-align": "center" }}>{row.date3}</td>
                  <td style={{ "text-align": "center", color: "grey" }}>
                    {row.date4}
                  </td>
                  <td style={{ "text-align": "center", border: row?.border }}>
                    {row.date5}
                  </td>
                  <td style={{ "text-align": "center" }}>{row.date7}</td>
                  <td style={{ "text-align": "center" }}>{row.date7}</td>
                </tr>
              ))}
            </tbody>
          </table> 
    </div>
  );
}
//sdf
export default App;
