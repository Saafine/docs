#!/bin/bash

# Get the list of connected displays
connected_displays=$(xrandr | grep " connected" | cut -d ' ' -f1)

echo "Connected displays:"
echo $connected_displays

xrandr --output HDMI-0 --mode 2560x1440 --rate 140 --pos 5120x0
xrandr --output DP-0 --mode 2560x1440 --rate 140 --pos 0x0
xrandr --output DP-2 --mode 2560x1440 --rate 140 --pos 2560x0  --primary
