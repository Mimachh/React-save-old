import { Carousel } from "react-responsive-carousel";
import React, { FunctionComponent } from 'react';
type Props = {
    screenshot: Array<any>,
};

// React-17
// const Slider: FunctionComponent = ({screenshot} :Props) => {
//     return (
//       <Carousel autoPlay={true} width="100%" showArrows={true} useKeyboardArrows={true} swipeable={true}>
//         {screenshot && screenshot.map(screen  => (
//             <div key={screen.id} >
//                 <img alt="Images du jeu" src={screen.image} />
//             </div>
//         ))}
//       </Carousel>
//     );
// };
// React-18
const Slider = ({screenshot} :Props) => {
  return (
    <Carousel autoPlay={true} width="100%" showArrows={true} useKeyboardArrows={true} swipeable={true}>
      {screenshot && screenshot.map(screen  => (
          <div key={screen.id} >
              <img alt="Images du jeu" src={screen.image} />
          </div>
      ))}
    </Carousel>
  );
};
export default Slider;
