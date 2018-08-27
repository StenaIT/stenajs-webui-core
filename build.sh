#!/usr/bin/env bash
[[ "${TRACE}" ]] && set -x
set -eou pipefail

echo "Build script"
source ${BUILD_TOOLS_PATH}/docker.sh

export VERSION="1.0.${BUILDKITE_BUILD_NUMBER} CI/#${BUILDKITE_COMMIT:0:7} `date -u +%Y-%m-%dT%H:%MZ`"
echo ${VERSION}

export BUILD_ARG1="VERSION=\"${VERSION}\""

docker:build
docker:push

# clean-up by removing pushed image (matching by the commit id)
docker:removeImage $(docker:imageId $COMMIT)
