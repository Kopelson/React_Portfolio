import React from "react";
const styles = {
    backgroundImage: {
        backgroundImage: `url("./images/resumebackground.JPG")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
    },
    backgroundOpacity: {
        background: "rgba(255, 255, 255, .5)",
        height: "auto"
    }
}

function Home(){
    return(
        <main className="container-fluid" >
        <article className="row pt-5 pb-5" style={styles.backgroundImage}>
                <section className="col-lg-6 p-5 mx-auto border border-dark" style={styles.backgroundOpacity}>
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <h1>Kenneth Kopelson</h1>    
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <p>A Full Stack Software Developer.</p>
                        </div>      
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <p>Email: kennethkopelson@gmail.com</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <p>Phone: 509-999-3374</p>
                        </div>
                    </div>
                </section> 
        </article>
        </main>
    );
}

export default Home;