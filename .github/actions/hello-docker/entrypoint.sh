#!/bin/sh -l

# prints a message in debug format
echo "::debug ::Debug Message"
echo "::warning ::Warning Message"
echo "::error ::Error Message"

#secret var
echo "::add-mask::$1"
echo "Hello $1"

# set output
time=$(date)

echo "::set-output name=time::$time"

#Expandable log group
echo "::group::Some expandable logs"
echo "some stuff"
echo "some stuff"
echo "some stuff"
echo "::endgroup::"

# Create environment var
echo "HELLO=hello" >> $GITHUB_ENV
#echo "::set-env name=HELLO::hello"
