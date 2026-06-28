"use client";

import React from "react";
import { UserButton } from "@clerk/nextjs";
import Icon from "@mdi/react";
import {   
  mdiNintendoGameBoy, 
  mdiFileDocumentOutline,
  mdiPuzzleOutline
} from "@mdi/js";
import MyGames from "../ClerkPages/MyGames";
import MyAssets from "../ClerkPages/MyAssets";
import MyExtensions from "../ClerkPages/MyExtensions";

// TODO: complete UserButton.UserProfilePage's : my games, my assets, my extensions
export default function TKUserButton() {
    return (
        <div id="tkuserbutton">
             <UserButton>
                <UserButton.UserProfilePage label="My Games" url="/mygames" labelIcon={<Icon path={mdiNintendoGameBoy} size={.7}/>}>
                  <MyGames />
                </UserButton.UserProfilePage>
                <UserButton.UserProfilePage label="My Assets" url="/myassets" labelIcon={<Icon path={mdiFileDocumentOutline} size={.7}/>}>
                  <MyAssets />
                </UserButton.UserProfilePage>
                <UserButton.UserProfilePage label="My Extensions" url="/myextensions" labelIcon={<Icon path={mdiPuzzleOutline} size={.7}/>}>
                  <MyExtensions />
                </UserButton.UserProfilePage>
              </UserButton>
        </div>
    )
}