import React from 'react'
import Topic from "../Topic";

export default function TopicPage() {

    return (
        <div className='topic-section'>
            <Topic title="Week 2 - Javascript" imgPath= "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"></Topic>
            <Topic query="frontend" title="Week 3 - Front End" imgPath="https://www.logolynx.com/images/logolynx/0d/0d35ef6c8d4fdaf0590228404dc6448b.png"></Topic>
            <Topic query="backend" title="Week 4 - Back End" imgPath="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/745px-Postgresql_elephant.svg.png"></Topic>
            <Topic query="database" title="Week 5 - Databases" imgPath="https://img.favpng.com/17/21/20/oracle-database-computer-icons-logo-png-favpng-VEiH1zgmXyWQgUD7ypdEe4Y9f.jpg"></Topic>
            <Topic query="testing" title="Week 6 - Testing" imgPath="https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png"></Topic>
            <Topic query="react_basics" title="Week 7 - React Basics" imgPath="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"></Topic>
            <Topic query="react_advanced" title="Week 8 - React Advanced" imgPath="https://simg.nicepng.com/png/small/826-8263562_the-react-logo-react-js-logo-svg.png"></Topic>
            <Topic title="Week 9 - Agile" imgPath="https://www.clearpivot.com/hs-fs/hubfs/2020%20ClearPivot/Images/Agile.jpeg?width=459&name=Agile.jpeg"></Topic>
            <Topic title="Week 10 - Computer Science" imgPath="https://www.kindpng.com/picc/m/78-786173_computer-science-logo-png-transparent-png.png"></Topic>
            <Topic title="Week 11 - Architecture" imgPath="https://images.ukdissertations.com/119/0520653188015.001.png"></Topic>
        </div>
    )
}