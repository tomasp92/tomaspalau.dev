export default function Acknoledgments() {
    return(
        <>
            <div className="acknoledgmentsContainer">
                <h1>Acknoledgments</h1>
                <div className="iframeContainer">
                    <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6775933718940004352" height="714" width="704" frameBorder="0" allowFullScreen="true" title="Publicación integrada"></iframe>
                </div>
                <div className="iframeContainer">
                    <iframe src="https://www.efset.org/cert/f1GeqH" height="714" width="704" frameBorder="0" allowFullScreen="true" title="Publicación integrada"></iframe>
                </div>
            </div>
            <style jsx>{`
                .acknoledgmentsContainer{
                    margin: auto;
                    padding: auto;
                    text-align: center;
                }
                .iframeContainer{
                    margin: auto;
                    padding: auto;
                    text-align: center;
                    border: solid 3px grey;
                }
                iframe{
                    margin: auto;
                    padding: auto;
                    text-align: center;
                }
            `}</style>
        </>
    )
}