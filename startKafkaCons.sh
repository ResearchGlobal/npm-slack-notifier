HOOK_SECRET="super-secret-string" \
  KAFKA_BOOTSTRAP_SERVER="localhost:9092" \
  TOPIC="npm-package-published" \
  GROUP_ID="group-id" \
  SLACK_INCOMING_WEBHOOK_URL="https://hooks.slack.com/services/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"\
  node consumer.js