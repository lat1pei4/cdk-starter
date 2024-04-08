import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { Bucket, CfnBucket } from "aws-cdk-lib/aws-s3";
import { Fn, CfnOutput } from "aws-cdk-lib";

export class PhotoStack extends cdk.Stack {
  private stackSuffix: string;
  public readonly photoBucketArn: string;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.initialzeSuffix();
    const photoBucket = new Bucket(this, "PhotoBucket2", {
      bucketName: `photo-bucket-${this.stackSuffix}`,
    });
    this.photoBucketArn = photoBucket.bucketArn;

    // new CfnOutput(this, "photos-bucket", {
    //   value: photoBucket.bucketArn,
    //   exportName: "photo-bucket",
    // });
  }

  private initialzeSuffix() {
    const shortStackID = Fn.select(2, Fn.split("/", this.stackId));
    this.stackSuffix = Fn.select(4, Fn.split("-", shortStackID));
  }
}
