import "./HubView.scss";
import { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import BugCard from "components/BugCard";
import ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";

class HubView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bugTopics: ["Seismic Slam", "Rocket Punch"],
      bugs: [
        {
          title: "Seismic Slam No-Reg",
          topic: "Seismic Slam",
          severity: 5,
          replication: 1,
          body:
            "Seismic Slam sometimes does not register and will deal no damage or any CC. This bug has been patched several times in the past. While it’s frequency rate has dropped dramatically it does still happen on the odd occasion.",
          videos: [
            "https://youtu.be/CBlf-q4YVBI",
            "https://gfycat.com/everyserenebird",
            "https://clips.twitch.tv/TolerantSolidShinglePanicVis",
            "https://medal.tv/clips/5501942/km1337FswLDW4?m=1",
            "https://streamable.com/eouxt",
            "https://streamable.com/x24pd",
            "https://youtu.be/XBwT3lHMxq8",
            "https://clips.twitch.tv/BlushingWanderingMallardWow",
            "https://www.twitch.tv/getquakedon/clip/ObliqueCrackyPigPlanking?filter=clips&range=24hr&sort=time",
            "https://clips.twitch.tv/IcyAlluringGoblinKeepo",
          ],
        },
        {
          title: "The Multi-Punch",
          topic: "Rocket Punch",
          severity: 1,
          replication: 1,
          body:
            "This bug may have been around since Doomfist’s launch into the game, however it has not been reported or encountered to our knowledge until now. Doomfist can stalemate a charging Rein, another punching Doomfist & bashing Brig with Rocket Punch, however if another enemy occupies the same space as the stalemating enemy Doomfist can both land the Rocket Punch on one hero and stalemate the other. Replication is quite hard.",
          videos: [
            "https://clips.twitch.tv/TiredClumsyDuckTinyFace",
            "https://imgur.com/HjWIYsf",
            "https://gfycat.com/composedsizzlinghellbender",
            "https://gfycat.com/lightonlyduckbillplatypus",
            "https://www.reddit.com/r/doomfistmains/comments/d21dyw/anyone_else_ever_experienced_something_like_this/",
            "https://youtu.be/tpgvTmydLqg",
            "https://www.twitch.tv/rufinian/clip/EnticingRespectfulBulgogiNomNom?filter=clips&range=24hr&sort=time",
            "https://youtu.be/548oXaFWoy4",
          ],
        },
        {
          title: "Healing & Speed vs. Rocket Punch",
          topic: "Rocket Punch",
          severity: 2,
          replication: 5,
          body:
            "When using his Healing Aura Lucio will be knocked back a little farther than if he is using his Speed Aura when Rocket Punched.",
          videos: [
            "https://gfycat.com/DifferentDetailedIndigobunting",
            "https://youtu.be/waGA8odggy4",
            "https://youtu.be/kenGSPHd6vE",
          ],
        },
      ],
    };
  }

  render() {
    const Bug = (
      title,
      itemTopic,
      severity,
      replication,
      body,
      videos,
      listTopic,
      itemIndex,
      listIndex
    ) => {
      if (listTopic === itemTopic) {
        return (
          <ListItem>
            <BugCard
              title={title}
              topic={itemTopic}
              severity={severity}
              replication={replication}
              body={body}
              videos={videos}
            />
          </ListItem>
        );
      } else {
        return null;
      }
    };

    return (
      <div className={`HubView`}>
        <div className={"Bugs"}>
          {this.state.bugTopics.map((listTopic, listIndex) => (
            <div className={"BugDiv"} key={listIndex}>
              <Typography
                variant="h5"
                color="textPrimary"
                component="p"
                className={"BugListTitle"}
              >
                {listTopic}
              </Typography>
              <List className={"BugList"}>
                {this.state.bugs.map((listItem, itemIndex) => (
                  <div key={itemIndex}>
                    {Bug(
                      listItem.title,
                      listItem.topic,
                      listItem.severity,
                      listItem.replication,
                      listItem.body,
                      listItem.videos,
                      listTopic,
                      itemIndex,
                      listIndex
                    )}
                  </div>
                ))}
              </List>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default HubView;
