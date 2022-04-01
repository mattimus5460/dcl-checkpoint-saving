# dcl-checkpoint-saving

A script for decentraland parkour courses to save and update a user's location.

![checkpoint ui](https://i.imgur.com/MkKNbn8.png)

- Press 1 to save a new checkpoint
- Press 2 and 3 to revert between saved checkpoints

There is also a progress bar that will track the progress against the user's current height on each checkpoint save.

Set `maxProgressHeight` to the top level of the course for proper amount in the progress bar.

Don't forget to add the scene.json permissions to move players:

`"requiredPermissions": ["ALLOW_TO_MOVE_PLAYER_INSIDE_SCENE"]`

This project uses dcl-scene-utils to display the ui. 
https://www.npmjs.com/package/@dcl/ui-scene-utils

For enhancements and integration assistance, please reach out on https://twitter.com/mattimus_crypto