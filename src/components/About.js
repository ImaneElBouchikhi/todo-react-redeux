import Mypic from '../assets/mypic.jpeg'

function About() {
    return (
        <div>
            <section className="">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card" id="list1">
                                <div className="card-body py-4 px-4 px-md-5">

                                    <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                                        <i className="fas fa-check-square me-1"></i>
                                        <u>About</u>
                                    </p>

                                    <div className="pb-2">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="flex align-items-center justify-center">

                                                    <div className="text-center">
                                                        <h1>Imane El Bouchikhi</h1>
                                                        <img src={Mypic} className="img-fluid rounded img" alt="" srcset="" />
                                                        <h2>Manage Your Todo Is Very Easy !</h2>
                                                        <p>Todos List V1.4</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;