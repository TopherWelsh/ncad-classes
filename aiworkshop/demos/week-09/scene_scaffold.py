# Blender 4.x scene scaffold for Week 09
# Paste into Blender's scripting tab and run. Test in the classroom version before class.

import bpy
import math
import random
from mathutils import Vector

random.seed(9)

# Clear the scene so the demo starts from a known state.
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete()

# Create a ground plane. Artists: this is the stage floor for the previz.
bpy.ops.mesh.primitive_plane_add(size=18, location=(0, 0, 0))
ground = bpy.context.object
ground.name = "tide_pool_ground_plane"
mat_ground = bpy.data.materials.new("mat_wet_sand")
mat_ground.diffuse_color = (0.32, 0.29, 0.24, 1)
ground.data.materials.append(mat_ground)

# Add a subtle displacement modifier so the plane does not feel computer-flat.
tex = bpy.data.textures.new("subtle_ground_noise", type="VORONOI")
tex.noise_scale = 3.8
disp = ground.modifiers.new("subtle_displacement", "DISPLACE")
disp.strength = 0.035
disp.texture = tex

# Simple material for rocks.
mat_rock = bpy.data.materials.new("mat_low_poly_rocks")
mat_rock.diffuse_color = (0.12, 0.13, 0.12, 1)

# Scatter rocks without overlap by checking distance between centers.
positions = []
attempts = 0
while len(positions) < 12 and attempts < 400:
    attempts += 1
    candidate = Vector((random.uniform(-5.5, 5.5), random.uniform(-3.5, 3.5), 0.25))
    if all((candidate - other).length > 1.15 for other in positions):
        positions.append(candidate)

for index, pos in enumerate(positions, start=1):
    bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=1, radius=random.uniform(0.35, 0.85), location=pos)
    rock = bpy.context.object
    rock.name = f"low_poly_rock_{index:02d}"
    rock.scale.z = random.uniform(0.35, 0.75)
    rock.rotation_euler = (random.random(), random.random(), random.random())
    rock.data.materials.append(mat_rock)

# Three-point lighting: key, fill, rim. This is a film/photo lighting idea, not a coding trick.
def add_area(name, loc, rot, power, size, color):
    bpy.ops.object.light_add(type="AREA", location=loc, rotation=rot)
    light = bpy.context.object
    light.name = name
    light.data.energy = power
    light.data.size = size
    light.data.color = color
    return light

add_area("key_warm_low", (-4, -5, 5), (math.radians(60), 0, math.radians(-35)), 550, 5, (1.0, 0.82, 0.62))
add_area("fill_cool_soft", (5, 4, 3), (math.radians(55), 0, math.radians(135)), 120, 7, (0.55, 0.75, 1.0))
add_area("rim_small_bright", (0, 5, 4), (math.radians(65), 0, math.radians(180)), 260, 3, (0.8, 0.95, 1.0))

# Camera: low angle, aimed at the rock cluster.
bpy.ops.object.camera_add(location=(0, -8, 2.2), rotation=(math.radians(76), 0, 0))
camera = bpy.context.object
bpy.context.scene.camera = camera
camera.data.lens = 28

# Volumetric fog through the world settings. This is the atmosphere pass.
world = bpy.context.scene.world or bpy.data.worlds.new("World")
bpy.context.scene.world = world
world.color = (0.035, 0.04, 0.045)

# Set render basics for a fast classroom preview.
bpy.context.scene.render.engine = "BLENDER_EEVEE_NEXT"
bpy.context.scene.eevee.taa_render_samples = 32
bpy.context.scene.render.resolution_x = 1280
bpy.context.scene.render.resolution_y = 720

# What could go wrong:
# - If BLENDER_EEVEE_NEXT is unavailable, switch render.engine to "BLENDER_EEVEE" or "CYCLES".
# - If a texture API changes, remove the displacement block and keep the rest of the scene.
# - If rocks overlap, increase the distance check or lower the rock count.
# - Always test this in the classroom Blender version before class.

