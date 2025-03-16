import { Container, Text, Sprite, Texture } from "pixi.js";
import { createRenderer } from "vue";

// createRenderer渲染pixi自定义组件
const renderer = createRenderer<Container, Container>({
  // 重写vue3的渲染api
  createElement(type) {
    // 创建容器
    let element;
    switch (type) {
      case "Container":
        element = new Container();
        break;
      case "Sprite":
        element = new Sprite();
        break;
      default:
        throw new Error(`type不存在${type}`);
        break;
    }
    return element;
  },
  patchProp(el, key, prevValue, nextValue) {
    // 更新属性
    switch (key) {
      case "texture":
        (el as Sprite).texture = Texture.from(nextValue);
        break;

      default:
        el[key] = nextValue;
        break;
    }
  },
  insert(el, parent) {
    // 插入节点
    if (el && parent) {
      parent.addChild(el);
    }
  },
  remove(el) {
    // 移除节点
    if (el && el.parent) {
      el.parent.removeChild(el);
    }
  },
  createText(text) {
    // 创建文本
    return new Text(text);
  },
  createComment(text) {
    return new Text(text);
  },
  setText() {},
  setElementText() {},
  parentNode(node) {
    return node.parent;
  },
  nextSibling() {
    // 返回兄弟节点
    return null;
  },
});

export function createApp(rootComponent) {
  return renderer.createApp(rootComponent);
}
