import {movePlayerTo} from "@decentraland/RestrictedActions";
import * as ui from '@dcl/ui-scene-utils'

// Set Max Progress Height
let maxProgressHeight = 5

let progressLabel = new ui.CornerLabel('Progress:', -220, 10)
engine.addEntity(progressLabel)

let progress = new ui.UIBar(0, -70, 20)
engine.addEntity(progress)

let helpLabel = new ui.CornerLabel('1 to Save, 2/3 to teleport', -150, 150)
engine.addEntity(helpLabel)


let curSavePos = 0
let savePositions: Vector3[] = []

const input = Input.instance
// 1
input.subscribe("BUTTON_UP", ActionButton.ACTION_3, false, (e) => {
    log("saving", e)
    let newPos = new Vector3(Camera.instance.position.x, Camera.instance.position.y, Camera.instance.position.z)
    savePositions.push(newPos)

    curSavePos = savePositions.length
    currentSaveNumLabel.set('' + curSavePos)

    totalSaveCounter.increase()
    progress.set(
        (Camera.instance.position.y <= maxProgressHeight) ? Camera.instance.position.y / maxProgressHeight : 1)
})

// 2
input.subscribe("BUTTON_UP", ActionButton.ACTION_4, false, (e) => {
    log("reverting to saved location", e, savePositions, curSavePos, savePositions[curSavePos])
    if (savePositions.length > 0 && curSavePos > 0) {
        movePlayerTo(savePositions[curSavePos - 1])
        curSavePos--
        currentSaveNumLabel.set('' + curSavePos)
    }
})

// 3
input.subscribe("BUTTON_UP", ActionButton.ACTION_5, false, (e) => {
    log("reverting to saved location", e, savePositions, curSavePos, savePositions[curSavePos])
    if (savePositions.length > 0 && curSavePos < savePositions.length) {
        movePlayerTo(savePositions[curSavePos - 1])
        curSavePos++
        currentSaveNumLabel.set('' + curSavePos)
    }
})

let currentSaveLabel = new ui.CornerLabel('Current', -105, 105)
engine.addEntity(currentSaveLabel)

let currentSaveNumLabel = new ui.CornerLabel('' + curSavePos, -43, 105)
engine.addEntity(currentSaveNumLabel)

let totalSaveLabel = new ui.CornerLabel('Total', -95, 65)
engine.addEntity(currentSaveLabel)

let totalSaveCounter = new ui.UICounter(0, -43, 65)
engine.addEntity(totalSaveCounter)