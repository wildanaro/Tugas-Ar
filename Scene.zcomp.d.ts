import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event, ConstructorForComponent } from "@zcomponent/core";

import { GLTF as GLTF_0 } from "@zcomponent/three/lib/components/models/GLTF";
import { CameraEnvironmentMap as CameraEnvironmentMap_1 } from "@zcomponent/zappar-three/lib/components/environments/CameraEnvironmentMap";
import { DefaultCookieConsent as DefaultCookieConsent_2 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultLoader as DefaultLoader_3 } from "@zcomponent/core/lib/components/DefaultLoader";
import { Group as Group_4 } from "@zcomponent/three/lib/components/Group";
import { DirectionalLight as DirectionalLight_5 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { FaceAnchorGroup as FaceAnchorGroup_6 } from "@zcomponent/zappar-three/lib/components/anchorgroups/FaceAnchorGroup";
import { OverrideOpacity as OverrideOpacity_7 } from "@zcomponent/three/lib/behaviors/OverrideOpacity";
import { FaceTracker as FaceTracker_8 } from "@zcomponent/zappar-three/lib/components/trackers/FaceTracker";
import { HeadMaskMesh as HeadMaskMesh_9 } from "@zcomponent/zappar-three/lib/components/meshes/HeadMaskMesh";
import { VideoRecorderUI as VideoRecorderUI_10 } from "@zcomponent/videorecorder/lib/VideoRecorderUI";
import { ZapparCamera as ZapparCamera_11 } from "@zcomponent/zappar-three/lib/components/cameras/Camera";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
* @ztag zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		AviatorSunglasses_glb: GLTF_0 & {
			behaviors: {

			}
		},
		CameraEnvironmentMap: CameraEnvironmentMap_1 & {
			behaviors: {

			}
		},
		DefaultCookieConsent: DefaultCookieConsent_2 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_3 & {
			behaviors: {

			}
		},
		Defaults: Group_4 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_5 & {
			behaviors: {

			}
		},
		FaceAnchorGroup: FaceAnchorGroup_6 & {
			behaviors: {
				0: OverrideOpacity_7,
			}
		},
		FaceTracker: FaceTracker_8 & {
			behaviors: {

			}
		},
		HeadMaskMesh: HeadMaskMesh_9 & {
			behaviors: {

			}
		},
		VideoRecorderUI: VideoRecorderUI_10 & {
			behaviors: {

			}
		},
		ZapparCamera: ZapparCamera_11 & {
			behaviors: {

			}
		},
		low_poly_horse_glb: GLTF_0 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {
		AnchorVisibility: Layer & { clips: {
			Hidden0: LayerClip;
			Visible0: LayerClip;
		}};
	}};

	/**
	 * The position, in 3D space, of this node relative to its parent. The three elements of the array correspond to the `x`, `y`, and `z` components of position.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public position: Observable<[x: number, y: number, z: number]>;

	/**
	 * The rotation, in three dimensions, of this node relative to its parent. The three elements of the array correspond to Euler angles - yaw, pitch and roll.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public rotation: Observable<[x: number, y: number, z: number]>;

	/**
	 * The scale, in three dimensions, of this node relative to its parent. The three elements of the array correspond to scales in the the `x`, `y`, and `z` axis.
	 * 
	 * @zprop
	 * @zdefault [1,1,1]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public scale: Observable<[x: number, y: number, z: number]>;

	/**
	 * Determines if this object and its children are rendered to the screen.
	 * 
	 * @zprop
	 * @zdefault true
	 * @zgroup Appearance
	 * @zgrouppriority 11
	 */
	public visible: Observable<boolean>;
}

export default Comp;
