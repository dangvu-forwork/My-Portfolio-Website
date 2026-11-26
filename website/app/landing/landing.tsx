// This is the ONLY page in this website... Because it is designed after an actual desktop environment

// css imports

import "./landing.css"

// component imports
import Taskbar from "~/components/level1/Taskbar"
import Task from "~/components/level1/Task"
import Start from "~/components/level1/Start"
import Time from "~/components/level1/Time"
import Taskholder from "~/components/level1/Taskholder"

import Background from "~/components/level1/Background"
import Filegrid from "~/components/level1/Filegrid"
import File from "~/components/level1/File"

export default function() {
    return (
        <Background>
            <Filegrid>
                <File fileIcon="/favicon.ico" fileName="about_me.html"/>
                <File fileIcon="/favicon.ico" fileName="Timeline"/>
            </Filegrid>

            <Taskbar>
                <Start/>

                <Taskholder>
                    <Task taskIcon="/favicon.ico" taskName="Hi..."/>
                    <Task taskIcon="/favicon.ico" taskName="Do you remember..."/>
                    <Task taskIcon="/favicon.ico" taskName="The twentiest first whatever night of september?"/>
                </Taskholder>

                <Time/>
            </Taskbar>

        </Background>
    )
}