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
                <div className="iframeContainer">
                    <iframe src="https://www.linkedin.com/embed/posts/tomaspalau_dear-network-i-am-pleased-to-share-with-activity-6971135151141482497-C4Ua?utm_source=share&utm_medium=member_desktop" height="714" width="704" frameBorder="0" allowFullScreen="true" title="Publicación integrada"></iframe>
                </div>
                
            </div>
            <style jsx>{`
                .acknoledgmentsContainer{
                    margin: 1rem auto;
                    padding: auto;
                    text-align: center;
                    align-self: center;
                    align-content: center;
                }
                .iframeContainer{
                    margin: 1rem 1rem;
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