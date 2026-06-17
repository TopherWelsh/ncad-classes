# Deliberately broken Week 09 variant for the error-loop demo.
# It uses an outdated engine name so students can practice reading an error and repairing it.

import bpy

bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete()
bpy.context.scene.render.engine = "BLENDER_GAME"  # Removed long ago; this should fail in Blender 4.x.

bpy.ops.mesh.primitive_cube_add(size=2, location=(0, 0, 1))
bpy.context.object.name = "this_line_will_not_save_the_bad_engine"

