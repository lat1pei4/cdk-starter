#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
<<<<<<< HEAD
import { CdkStarterStack } from "../lib/cdk-starter-stack";

const app = new cdk.App();
new CdkStarterStack(app, "CdkStarterStack");
=======
// import { CdkStarterStack } from "../lib/cdk-starter-stack";
import { PhotoStack } from "../lib/PhotoStack";
import { PhotoHandlerStack } from "../lib/PhotoHandlerStack";

const app = new cdk.App();
// new CdkStarterStack(app, "CdkStarterStack");
const photoStack = new PhotoStack(app, "PhotoStack");
new PhotoHandlerStack(app, "PhotoHandlerStack", {
  targetBucketArn: photoStack.photoBucketArn,
});
>>>>>>> dfcc8f1 (improved the method to share resourse with cdk)
