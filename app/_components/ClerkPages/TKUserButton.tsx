"use client";

import React from "react";
import { UserButton } from "@clerk/nextjs";
import Icon from "@mdi/react";
import {
  mdiNintendoGameBoy,
  mdiFileDocumentOutline,
  mdiPuzzleOutline,
  mdiHeartOutline,
  mdiTrophyOutline,
} from "@mdi/js";
import MyGames from "../ClerkPages/MyGames";
import MyAssets from "../ClerkPages/MyAssets";
import MyExtensions from "../ClerkPages/MyExtensions";

// TODO: complete UserButton.UserProfilePage's : my games, my assets, my extensions, my favorites, my achievements
export default function TKUserButton() {
  return (
    <div id="tkuserbutton">
      <UserButton>
        <UserButton.UserProfilePage
          label="My Games"
          url="/mygames"
          labelIcon={<Icon path={mdiNintendoGameBoy} size={0.6} />}
        >
          <MyGames />
        </UserButton.UserProfilePage>
        <UserButton.UserProfilePage
          label="My Assets"
          url="/myassets"
          labelIcon={<Icon path={mdiFileDocumentOutline} size={0.6} />}
        >
          <MyAssets />
        </UserButton.UserProfilePage>
        <UserButton.UserProfilePage
          label="My Extensions"
          url="/myextensions"
          labelIcon={<Icon path={mdiPuzzleOutline} size={0.6} />}
        >
          <MyExtensions />
        </UserButton.UserProfilePage>
        <UserButton.UserProfilePage
          label="My Favorites"
          url="/myfavorites"
          labelIcon={<Icon path={mdiHeartOutline} size={0.6} />}
        >
          <div>My Favorites</div>
        </UserButton.UserProfilePage>
        <UserButton.UserProfilePage
          label="My Achievements"
          url="/myachievements"
          labelIcon={<Icon path={mdiTrophyOutline} size={0.6} />}
        >
          <div>My Achievements</div>
        </UserButton.UserProfilePage>
      </UserButton>
    </div>
  );
}
