﻿import { TypeStore } from "@needle-tools/engine"

// Import types
import { ballSpawner } from "../scripts/ballSpawner.js";
import { Cactus } from "../scripts/cactus.js";
import { CameraController } from "../scripts/cameraController.js";
import { Chest } from "../scripts/chest.js";
import { DeveloperDebug } from "../scripts/developerDebug.js";
import { PentagoBoardAnimator } from "../scripts/pentagoBoardAnimator.js";
import { PlayerController } from "../scripts/playerController.js";
import { Shovel } from "../scripts/shovel.js";
import { Squid } from "../scripts/squid.js";

// Register types
TypeStore.add("ballSpawner", ballSpawner);
TypeStore.add("Cactus", Cactus);
TypeStore.add("CameraController", CameraController);
TypeStore.add("Chest", Chest);
TypeStore.add("DeveloperDebug", DeveloperDebug);
TypeStore.add("PentagoBoardAnimator", PentagoBoardAnimator);
TypeStore.add("PlayerController", PlayerController);
TypeStore.add("Shovel", Shovel);
TypeStore.add("Squid", Squid);
