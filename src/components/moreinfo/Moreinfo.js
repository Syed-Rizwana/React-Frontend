import React, { useState } from 'react';
import './Moreinfo.css'; // Create MoreInfo.css to hold your styles
// Import necessary images and icons if used locally in the component

const MoreInfo = () => {
    const [showInfo, setShowInfo] = useState(false);

    const toggleInfo = () => {
        setShowInfo(!showInfo);
    };

    return (
        <>
        <div class="gallery">
        <div class="content">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQismtrQ-nmPCl7cq18cKuqNJks7VSWlzog_g&usqp=CAU"
                alt=""/>
            <h4>detection of diabetic retinopathy</h4>
            <p>healthcare providers can capture retinal images of their patients using what's called a fundus camera.
            </p>
            <h6>artificial intelligence</h6>
            <ul>
                <li>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star"></i>
                </li>
            </ul>
            <button class="more-1" id="moreInfoBtn">More Info</button>

        </div>
        <div class="content">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQINqAWL04RN1DJQi2BD-VmTYcYc6j7kDitSg&usqp=CAU"
                alt=""/>
            <h4>Face Recognisation </h4>
            <p>computer technology used to find and identify human faces in digital images and video

                .</p>
            <h6>Machine Learning</h6>
            <ul>

                <li>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                </li>
            </ul>
            <button class="more-1" id="moreInfoBtn">More Info</button>
        </div>
        <div class="content">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCfqyOcbjV6uzJSLPirtop92KfDzatq1PH08zv97fxTt52NnEs2hQtEzHIydO-IjQfPE&usqp=CAU"
                alt=""/>
            <h4>Speech recognition </h4>
            <p>Speech recognition AI is the process of converting spoken language into text. </p>
            <h6>Deep Learning </h6>
            <ul>
                <li>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star"></i>
                </li>
            </ul>
            <button class="more-1" id="moreInfoBtn">More Info</button>

        </div>
        <div class="content">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCqeLf6w-UEkARWdPnfbx8pKzYWi-85DxbB4H9lBdRQikyJlJXaeg7gLszdic-jWQ0WJI&usqp=CAU"
                alt=""/>
            <h4>Animal Face Detection </h4>
            <p>We use Python’s OpenCV for this. We can also use Face Detection in the case of Animals too.</p>
            <h6>Deep Learning </h6>
            <ul>
                <li>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star"></i>
                </li>
            </ul>
            <button class="more-1" id="moreInfoBtn">More Info</button>
        </div>
    </div>
    <div class="gallery">
        <div class="content">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJYl5NOOIpcSx3igOuxieEuIXL7v_xdIaKxw&usqp=CAU"
                alt=""/>
            <h4>Face Mask Detection</h4>
            <p>healthcare providers can capture retinal images of their patients using what's called a fundus camera.
            </p>
            <h6>artificial intelligence</h6>
            <ul>
                <li>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star"></i>
                </li>
            </ul>
            <button class="more-1" id="moreInfoBtn">More Info</button>
        </div>
        <div class="content">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD9BKaNxtb8913c1xp3NitcYQM2UXMfpsshg&usqp=CAU"
                alt=""/>
            <h4>Shooter Game </h4>
            <p>by giving the characters in the game a lifelike quality, even if the game itself is set in a fantasy
                world.</p>
            <h6>Python</h6>
            <ul>

                <li>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                </li>
            </ul>
            <button class="more-1">More Info</button>
        </div>
        <div class="content">
            <img src="color.png"/>
            <h4>Color Detection</h4>
            <p>Speech recognition AI is the process of converting spoken language into text. </p>
            <h6>Python </h6>
            <ul>
                <li>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star"></i>
                </li>
            </ul>
            <button class="more-1">More Info</button>

        </div>
        <div class="content">
            <img src="car2.jpg" alt=""/>
            <h4>Vehicle Detection </h4>
            <p>Speech recognition AI is the process of converting spoken language into text. </p>
            <h6> </h6>
            <ul>
                <li>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star"></i>
                </li>
            </ul>
            <button class="more-1">More Info</button>
        </div>
    </div>
    <div class="overlay" id="overlay"></div>
    <div class="expanded-box" id="expandedBox">
        <div class="content1">

            <h3>College/University Name:<p>Narasaraopet Engineering college</p>
            </h3>
            <h3>Aim:<p>Speech recognition AI is the process of converting spoken language into text. </p>
            </h3>
            <h3>Software Tools</h3>
            <p>we are used angular,html and css for front end</p>
            <p>we are use nodeJs,express for backend</p>
            <p>We are used oracle for database</p>
            <h3>Contact:</h3>
            <p><b>Mobile:</b>3467586979</p>
            <p><b>Email:</b>hagdg23@gmail.com</p>
            <button id="closeBtn">Close</button>
        </div>
    </div>
    <script src="click.js"></script>
    </>
      
    );
};

export default MoreInfo;
