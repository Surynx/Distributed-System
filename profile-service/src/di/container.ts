import { authClient } from "../client/auth.client";
import { userClient } from "../client/user.client";
import ProfileController from "../controller/profile.controller";
import ProfileService from "../service/profile.service";

const profileService = new ProfileService(userClient,authClient);
const profileController = new ProfileController(profileService);

export { profileController };