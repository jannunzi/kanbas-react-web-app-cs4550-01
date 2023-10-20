import './index.css';
const color = 'blue';
const dangerous = true;
function Classes() {
 return (
   <div>
     <h2>Classes</h2>
     <div className="wd-bg-yellow wd-fg-black wd-padding-10px">
       Yellow background
     </div>
     <div className="wd-bg-blue wd-fg-black wd-padding-10px">
       Blue background
     </div>
     <div className="wd-bg-red wd-fg-black wd-padding-10px">
       Red background
     </div>
     <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'}
                                     wd-fg-black wd-padding-10px`}>
       Dangerous background
     </div>
     <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
       Dynamic Blue background
     </div>

   </div>
   
 )
};
export default Classes;