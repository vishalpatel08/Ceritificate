import React, { useRef } from 'react'
import certificate2 from './certificate2.jpg'

const Landing4 = () => {

let ctx ;
const ref =  useRef();
if(window!="undefined"){
 const image = new Image(certificate2);
  ctx = ref.current.getContext('2d');
  
  image.src = certificate2;
  console.log(certificate2)

  image.addEventListener('load', () => {
    debugger
    console.log('image is loaded2');
    ctx.drawImage(image, 0, 0, ref.width, ref.height)
    ctx.font = '15px monotype corsiva'
    ctx.fillStyle = '#001'
    ctx.fillText('Vishal patel' , 300, 230)
    ctx.fillText('IIT_KGP' , 110, 245)
    ctx.fillText('TFT' , 400, 245)
    
  }); 
}
// const Download = (dwn) =>{
//     dwn.href = toDataURL('image/jpg')
//     dwn.download = 'SF_participation'
    
// }
console.log(ref)
  return (
    <div>
    <canvas id="canvas"
    height="400px"
    width="565.745px" 
    ref={ ref }
  
    />
    <a href='#' id="dwn"  >
      Download_1
    </a>
  
    </div>
  );

}

export default Landing4;