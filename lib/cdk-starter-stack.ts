import * as cdk from "aws-cdk-lib";
<<<<<<< HEAD
import { Duration } from "aws-cdk-lib";
=======
import { Duration, CfnOutput, CfnParameter } from "aws-cdk-lib";
>>>>>>> dfcc8f1 (improved the method to share resourse with cdk)
import { Bucket, CfnBucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

class L3Bucket extends Construct {
  constructor(scope: Construct, id: string, expiration: number) {
    super(scope, id);

    new Bucket(this, "L3Bucket", {
      lifecycleRules: [
        {
          expiration: Duration.days(expiration),
        },
      ],
    });
  }
}

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CfnBucket(this, "MyL1Bucket", {
      lifecycleConfiguration: {
        rules: [
          {
            expirationInDays: 1,
            status: "Enabled",
          },
        ],
      },
    });

<<<<<<< HEAD
    new Bucket(this, "MyL2Bucket", {
      lifecycleRules: [
        {
          expiration: Duration.days(2),
        },
      ],
    });
=======
    const duration = new CfnParameter(this, "duration", {
      default: 6,
      minValue: 1,
      maxValue: 10,
      type: "Number",
    });

    const MyL2Bucket = new Bucket(this, "MyL2Bucket", {
      lifecycleRules: [
        {
          expiration: Duration.days(duration.valueAsNumber),
        },
      ],
    });

    new CfnOutput(this, "MyL2BucketName", {
      value: MyL2Bucket.bucketName,
    });

>>>>>>> dfcc8f1 (improved the method to share resourse with cdk)
    new L3Bucket(this, "MyL3Bucket", 3);
  }
}
