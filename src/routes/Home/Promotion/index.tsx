import { Link } from "react-router-dom";
import Button from "../../../components/Button";


export default function Promotion() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="mt-30 mb-30">
            <h2>Pagina de Promoção</h2>
          </div>

          <div className="button-width">
            <Link to={"/subscription"}>
              <Button text="Quero Participar" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
