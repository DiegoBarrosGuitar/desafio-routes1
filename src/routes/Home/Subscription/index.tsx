import { Link } from "react-router-dom";
import Button from "../../../components/Button";

export default function Subscription() {
  return (
    <main>
      <section>
        <div className="container">
          <h2 className="section-subscribe-title">Faça sua Inscrição!</h2>
          <div className="mt-30 mb-30">
            <h2>Pagina de inscricao</h2>
          </div>

          <div className="button-width">
            <Link to={"/promotion"}>
              <Button text="Ver promoção" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
