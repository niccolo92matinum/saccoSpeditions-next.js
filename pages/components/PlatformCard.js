import { connect } from "react-redux";
import { useRouter } from "next/router";

function PlatformCard({ allInfo, saveUserChoise }) {
  //chiedi a sergio perche bisogna inserire la funzione come argomento

  const router = useRouter();
  const handleGoToOverview = () => {
    router.push("/Overview");
  };

  return (
    <>
      <div className="header-master-master">
        <div className="header-master">
          <div className="header">
            <div className="children">
              <img src={allInfo.img} alt="" width={70} height={70}></img>
            </div>
            <div className="children">
              <h3 className="time">{allInfo.tempoSpedizione} giorni</h3>
            </div>
            <div className="children">
              <h3 className="price">
                {allInfo.prezzo}€
              </h3>
            </div>
            <div className="children">
              <button
                className="button-start"
                onClick={() => {
                  saveUserChoise(allInfo), handleGoToOverview();
                }}
              >
                Scegli
              </button>
            </div>
          </div>

          <div className="header">
            <div className="children">
              <div>
                <p className="p-placeholder">Partenza</p>
                <p>{allInfo.partenza}</p>
              </div>
            </div>
            <div className="children">
              <div>
                <p className="p-placeholder">Consegna stimata</p>
                <p>
                  {new Date(allInfo.consegnaStimata)
                    .toJSON()
                    .slice(0, 10)
                    .split("-")
                    .reverse()
                    .join("-")}
                </p>
              </div>
            </div>
            <div className="children">
              <div>
                <p className="p-placeholder">Ritiro</p>
                <p>{allInfo.tipoRitiro}</p>
              </div>
            </div>
            <div className="children">
              <div>
                <p className="p-placeholder">Consegna</p>
                <p>{allInfo.tipoRitiro}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const saveUserChoise = (x) => {
  return {
    type: "SAVE_USER_CHOISE",
    payload: x,
  };
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = {
  saveUserChoise,
};
console.log(saveUserChoise,'save')
export default connect(mapStateToProps, mapDispatchToProps)(PlatformCard);
