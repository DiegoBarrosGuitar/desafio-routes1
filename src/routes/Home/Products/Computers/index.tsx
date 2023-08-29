import { Outlet } from "react-router-dom";
import Card from "../../../../components/Card";

export default function Computers() {
  return (
    <>
    <main>
      <section>
        <div className="container">
          <div className="mt-30 mb-30">  
              <Card/>
          </div>
          <div>
            <h3>Computador 1</h3>
            <h3>Computador 2</h3>
            <h3>Computador 3</h3>
          </div>
        </div>
      </section>
    </main>
    <Outlet/>
    </>
    
  );
}
