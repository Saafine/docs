#!/bin/bash

# Get the list of connected displays
connected_displays=$(xrandr | grep " connected" | cut -d ' ' -f1)

# Iterate through each connected display and set it to its preferred mode
for display in $connected_displays; do
    xrandr --output $display --auto
done
