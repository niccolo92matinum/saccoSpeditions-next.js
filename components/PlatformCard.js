import { connect } from "react-redux";
import { useRouter } from "next/router";

function PlatformCard({ Info, saveUserChoise }) {
  // chiedi a sergio perche bisogna inserire la funzione come argomento

  const router = useRouter();
  const handleGoToOverview = () => {
    router.push("/Overview");
  };

  const choise = () =>{
    saveUserChoise(Info)
    handleGoToOverview()
  }

  return (
    <div className="header-master-master">
        <div className="header-master">
          <div className="header">
            
            <div className="children">
              <img src={Info.img||''} alt="" width={70} height={70} />
            </div>
            <div className="children">
              <h3 className="time">{Info.tempoSpedizione} giorni</h3>
            </div>
            <div className="children">
              <h3 className="price">
                {Info.prezzo}€
              </h3>
            </div>
            <div className="children">
              <button
                className="button-start"
                onClick={() => {
          
                  choise()
                }}
              >
                Scegli
              </button>
            </div>
          </div>

          <div className="header hideOnMobile">
            <div className="children">
              <div>
                <p className="p-placeholder">Partenza</p>
                <p>{Info.partenza}</p>
              </div>
            </div>
            <div className="children">
              <div>
                <p className="p-placeholder">Consegna stimata</p>
                <p>
                  {new Date(Info.consegnaStimata)
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
                <p>{Info.tipoRitiro}</p>
              </div>
            </div>
            <div className="children">
              <div>
                <p className="p-placeholder">Consegna</p>
                <p>{Info.tipoRitiro}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

const saveUserChoise = (x) => ({
    type: "SAVE_USER_CHOISE",
    payload: x,
  });

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = {
  saveUserChoise,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlatformCard);
