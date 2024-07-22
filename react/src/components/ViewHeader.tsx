export default function ViewHeader({
  header,
  prevAction,
  thisAction,
  nextAction
} : {
  header: string,
  prevAction: React.MouseEventHandler,
  thisAction: React.MouseEventHandler,
  nextAction: React.MouseEventHandler
}) {
  return (
    <div className="container mb-1">
      <div className="row">
        <div className="col">
          <h2 id="current-period">
            {header}
          </h2>
        </div>
        <div className="col text-end">
          <div className="btn-group"
               role="group">
            <button id="prev-period"
                    type="button"
                    className="btn btn-sm btn-outline-secondary px-2"
                    onClick={prevAction}>
              ◀
            </button>
            <button id="this-period"
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick={thisAction}>
              Today
            </button>
            <button id="next-period"
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick={nextAction}>
              ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
