import { useEffect } from "react";

const TawkTo = () => {
  useEffect(() => {
    console.log("🔵 TawkTo: Initializing...");
    
    // Tawk.to official embed code
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    
    (function(){
      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/69e37f66966d9a1c3a9f8189/1jmlgnjvh';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin','*');
      
      s1.onload = () => {
        console.log("✅ TawkTo: Script loaded successfully!");
      };
      
      s1.onerror = (error) => {
        console.error("❌ TawkTo: Failed to load script", error);
      };
      
      s0.parentNode.insertBefore(s1, s0);
      console.log("📝 TawkTo: Script added to DOM");
    })();

  }, []);

  return null;
};

export default TawkTo;
