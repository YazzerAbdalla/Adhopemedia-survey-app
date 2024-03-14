"use client"

const PerkoxLoader = () => {
  return (
    <div className="preloader-container"> 
    <div className="btn" >
      <strong className="text-gray-50">Adhopemedia</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  </div>
  );
};

export default PerkoxLoader;
