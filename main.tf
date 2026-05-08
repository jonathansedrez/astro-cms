terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.92"
    }
  }

  required_version = ">= 1.2"
}

provider "aws" {
  region = "us-east-1"
  access_key = "test" # LocalStack only
  secret_key = "test" # LocalStack only
  skip_credentials_validation = true # LocalStack only
  skip_metadata_api_check     = true # LocalStack only
  skip_requesting_account_id  = true # LocalStack only
  s3_use_path_style           = true # LocalStack only

  endpoints {
    s3 = "http://localhost:4566" # LocalStack only
  }
}

resource "aws_s3_bucket" "main" {
  bucket = "my-first-s3-bucket"
}

output "bucket_arn" {
  value = aws_s3_bucket.main.arn # Refers to line 25
}