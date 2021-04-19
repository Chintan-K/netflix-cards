import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import sdata from './Data';
import './Oldindex.css';

// const favapp = "netflix";

// const favA = () => {
// if(favapp === "netflix")
// {
//   return(
//     <Card
//       imgsrc= {sdata[0].imgsrc}
//       title= {sdata[0].title}
//       sname= {sdata[0].sname}
//       link= {sdata[0].link}
//     />);   
// }
// else if(favapp === "voot")
// {
//   return(
//     <Card
//       imgsrc= {sdata[4].imgsrc}
//       title= {sdata[4].title}
//       sname= {sdata[4].sname}
//       link= {sdata[4].link}
//     />);
// }
// else{
//   return(
//     <Card
//       imgsrc= {sdata[3].imgsrc}
//       title= {sdata[3].title}
//       sname= {sdata[3].sname}
//       link= {sdata[3].link}
//     />);
// }
// };


ReactDOM.render(
  <>

<h1 className="headding">Best Web Series</h1>

{sdata.map((val,index) => {
  return(
    <Card
      key={val.id}
      imgsrc= {val.imgsrc}
      title= {val.title}
      sname= {val.sname}
      link= {val.link}
    />
);
}
)}

  </>
  ,
  document.getElementById("root")
)