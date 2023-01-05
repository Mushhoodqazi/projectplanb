import { Link } from "react-router-dom";
import Pdf from '../Components/englishnotes.pdf';
import Footertwo from "./Footertwo";
function Englishnine() {
    return (
        <div>


            <div>
                <nav class="navbar navbar-expand-lg bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" style={{ cursor: "pointer" }} >Plan-B Tuition Point</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link to="/">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="Classninth">
                                        <a class="nav-link" href="#">Class IX</a>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="Classtenth">
                                        <a class="nav-link" href="#">Class X</a>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="Fscone">
                                        <a class="nav-link" href="#">Class XI</a>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="Fsctwo">
                                        <a class="nav-link" href="#">Class XII</a>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{ marginLeft: "7%", marginTop:"50px", marginRight: "7%", height: "1850px" }}>

                <div style={{ width: "800px", marginLeft: "50px", marginTop: "50px" }}>
                    <img style={{ width: "700px", height: "400px" }} src="english.png" alt="courses" />;
                </div>
                <div style={{ width: "400px", height: "700px", marginLeft: "850px", marginTop: "-400px" }}>
                    <ul class="list-group" >
                        <Link to="/Englishnine">
                            <li class="list-group-item" style={{ fontSize: "25px", textAlign: "center" }}>English</li>
                        </Link>
                        <li class="list-group-item" style={{ fontSize: "25px", textAlign: "center" }}>Physics</li>
                        <li class="list-group-item" style={{ fontSize: "25px", textAlign: "center" }}>Chemestry</li>
                        <li class="list-group-item" style={{ fontSize: "25px", textAlign: "center" }}>Computer</li>
                        <li class="list-group-item" style={{ fontSize: "25px", textAlign: "center" }}>Geography</li>
                        <li class="list-group-item" style={{ fontSize: "25px", textAlign: "center" }}>Computer</li>
                        <li class="list-group-item" style={{ fontSize: "25px", textAlign: "center" }}>Geography</li>
                    </ul>
                </div>
                <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded"style={{ marginLeft: "8%", marginRight: "8%",  height: "1265px", marginTop: "-250px" }}>
                    <div class="card" style={{ margintop: "20px" }}>
                        <div class="card-header"><h4 style={{ align: "center" }}>9th Class English Grammar Notes with FREE PDF<span class="badge badge-primary">New</span></h4></div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>A lot of Pakistani students are looking for 9th Class English Grammar books in PDF on the internet. Guess what? We’ve got a better solution to your searching.

                                    We have prepared the book for SSC part I students with English Grammar notes as well

                                    All Subjects 9th Class Notes in One Place
                                    Preparing a foreign language for the board examination can be difficult and consfuing. Students are often at their wit’s end to gather theright sources with the right answers to their queries. We care about your preparation and time.

                                    And so, you can find all the topics, concepts and notes on grammar in the PDF version we’ve prepared.

                                    The notes have 13 chapters that will help you in improving your grammar and preparing in the best possible way for your exams.



                                    <p style={{ marginTop: "20px" }}>A lot of topics are written in simple English even with Urdu words so that the students of SSC Part 1 can easily understand for getting great marks.
                                        If you don't know the 12 tenses, you can learn the tenses here. It is the best site I have ever found for learning English tenses with diagrams.
                                        The best thing about the notes is that you don't need to read the whole Grammar book rather you can just read the notes where to the point answers are written.
                                        It doesn't matter either you belong to Federal Board (FBISE), Lahore Board, Multan Board, Rawalpindi Board or Karachi Board, these notes would help you anyway. A win-win for all!</p>

                                    <h4 style={{ marginTop: "50px" }}>CHAPTER 1: PARAGRAPH WRITING</h4>
                                    <p>In this chapter, it is explained how to write a good paragraph, and all the paragraph are given which are available in the 9th class English Grammar and Composition book. Urdu meanings are given for the difficult words so that you don't need open a dictionary to look for a word.

                                        Topic sentence:This is the first sentence of a paragraph, and it serves as an introduction to the topic or main idea of the paragraph. It is typically the first sentence of a paragraph and may serve as a transition from the ideas in the preceding paragraph.

                                        Supporting details:These are sentences that explain or develop the main idea in more detail and provide specific examples or evidence to support it. They can either be facts, opinions, statistics and anecdotes among others.

                                        Transition word/phrase: This is a word or phrase that shows logical relationship between ideas within a sentence, between sentences, or between paragraphs and it helps to achieve coherence in writing by showing how one idea relates to another. Examples are; however, hence ,in addition,in fact ,on the contrary etc

                                        Concluding statement closes a paragraph and it restates the main idea of your paragraph. In this kind of writing, you need to convince your reader that your opinion is right by giving solid reasons for your opinion and supporting them with strong examples and evidence.

                                        The term "paragraph" refers to a group of sentences that are related to a single subject and are organized and coherent. Paragraphs should be used for almost every piece of writing longer than a few sentences. </p>

                                </p>
                                <div className = "App">
          <a href = {Pdf} target = "_blank">preview pdf online</a>
        </div>
      <p>A lot of topics are written in simple English even with Urdu words so that the students of SSC Part 1 can easily understand for getting great marks.
If you don't know the 12 tenses, you can learn the tenses here. It is the best site I have ever found for learning English tenses with diagrams. 
The best thing about the notes is that you don't need to read the whole Grammar book rather you can just read the notes where to the point answers are written.
It doesn't matter either you belong to Federal Board (FBISE), Lahore Board, Multan Board, Rawalpindi Board or Karachi Board, these notes would help you anyway. A win-win for all!</p>

                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>

<Footertwo/>

        </div>
    );
}

export default Englishnine;