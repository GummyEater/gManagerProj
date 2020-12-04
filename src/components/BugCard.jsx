import React, { useState } from "react";
import { withTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./BugCard.scss";

function BugCard({ title, topic, severity, replication, body, videos }) {
  let [expandedCard, setExpandedCard] = useState(false);
  return (
    <Card className={"BugCard"}>
      <CardHeader
        avatar={<Avatar className={`Avatar-${severity}`}>{""}</Avatar>}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={`${videos.length} Clips, ${severity}/5 Severity, ${replication}/5 Replication`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
        <IconButton
          className={`ExpandIconBtn ${expandedCard ? "opened" : "closed"}`}
          onClick={() => setExpandedCard(!expandedCard)}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expandedCard} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Video Examples:</Typography>
          {videos.map((videoUrl) => (
            <a href={videoUrl} target="_blank" className={"VideoUrl"}>
              <Typography variant={"subtitle2"}>{videoUrl}</Typography>
            </a>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default withTheme(BugCard);
