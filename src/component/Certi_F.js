import React, { useRef,useEffect } from 'react'
import certificate2 from './certificate2.jpg'

const Landing4 = () => {


const ref =  useRef();
const ref2 = useRef();

useEffect(() => {
  
  const ctx = ref.current.getContext('2d');

  const image = new Image(certificate2);
 
   image.src = certificate2;
  //  console.log(image)
  console.log(ctx)
   image.addEventListener('load', () => {
      
      //  console.log('image is loaded2');
       ctx.drawImage(image, 0, 0, ref.current.width, ref.current.height)
       ctx.font = '15px monotype corsiva'
       ctx.fillStyle = '#001'
       ctx.fillText('Vishal patel' , 300, 230)
       ctx.fillText('IIT_KGP' , 110, 245)
       ctx.fillText('TFT' , 400, 245)
   
     }); 
    ref2.current.href = ref.current.toDataURL("image/png")
  },[])
  

  return (
    <div>
    <canvas id="canvas"
    height="400px"
    width="565.745px" 
    ref={ ref }
  
    />
    <a ref={ref2}  download="certificate.png">
      Download_1
    </a>
  
    </div>
  );

}

export default Landing4;
