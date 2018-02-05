declare namespace jest {
    interface Matchers<R> {
        // custom-extended
        /** 数组相等 */
        toEqualArray(expected: any[] | ArrayLike<any>): R;

        // jest-extended
        /** Passing assertion. */
        pass(message: string): R;
        /** Failing assertion.. */
        fail(message: string): R;
        /** Use `.toBeEmpty` when checking if a `String` `''`, `Array` `[]` or `Object` `{}` is empty. */
        toBeEmpty(): R;
        /** Use `.toBeOneOf` when checking if a value is a member of a given `Array`. */
        toBeOneOf(members: any[]): R;
        /** Use `.toBeNil` when checking a value is `null` or `undefined`. */
        toBeNil(): R;
        /** Use `.toSatisfy` when you want to use a custom matcher by supplying a predicate function that returns a `Boolean`. */
        toSatisfy(predicate: (item: any) => boolean): R;
        /** Use `.toBeArray` when checking if a value is an `Array`. */
        toBeArray(): R;
        /** Use `.toBeArrayOfSize` when checking if a value is an `Array` of size x. */
        toBeArrayOfSize(size: number): R;
        /** Use `.toIncludeAllMembers` when checking if an `Array` contains all of the same members of a given set. */
        toIncludeAllMembers(members: any[]): R;
        /** Use `.toIncludeAnyMembers` when checking if an `Array` contains any of the members of a given set. */
        toIncludeAnyMembers(members: any[]): R;
        /** Use `.toSatisfyAll` when you want to use a custom matcher by supplying a predicate function that returns a `Boolean` for all values in an array. */
        toSatisfyAll(predicate: (item: any) => boolean): R;
        /** Use `.toBeBoolean` when checking if a value is a `Boolean`. */
        toBeBoolean(): R;
        /** Use `.toBeTrue` when checking a value is equal (===) to `true`. */
        toBeTrue(): R;
        /** Use `.toBeFalse` when checking a value is equal (===) to `false`. */
        toBeFalse(): R;
        /** Use `.toBeFunction` when checking if a value is a `Function`. */
        toBeFunction(): R;
        /** Use `.toHaveBeenCalledBefore` when checking if a `Mock` was called before another `Mock`. */
        // TODO: 有输入
        toHaveBeenCalledBefore(): R;
        /** Use `.toBeNumber` when checking if a value is a `Number`. */
        toBeNumber(): R;
        /** Use `.toBeNaN` when checking a value is `NaN`. */
        toBeNaN(): R;
        /** Use `.toBeFinite` when checking if a value is a `Number`, not `NaN` or `Infinity`. */
        toBeFinite(): R;
        /** Use `.toBePositive` when checking if a value is a positive `Number`. */
        toBePositive(): R;
        /** Use `.toBeNegative` when checking if a value is a negative `Number`. */
        toBeNegative(): R;
        /** Use `.toBeEven` when checking if a value is an even `Number`. */
        toBeEven(): R;
        /** Use `.toBeOdd` when checking if a value is an odd `Number`. */
        toBeOdd(): R;
        /** Use `.toBeWithin` when checking if a number is in between the given bounds of: start (inclusive) and end (exclusive). */
        toBeWithin(start: number, end: number): R;
        /** Use `.toBeObject` when checking if a value is an `Object`. */
        toBeObject(): R;
        /** Use `.toContainKey` when checking if an object contains the provided key. */
        toContainKey(key: string): R;
        /** Use `.toContainKeys` when checking if an object has all of the provided keys. */
        toContainKeys(keys: string[]): R;
        /** Use `.toContainAllKeys` when checking if an object only contains all of the provided keys. */
        toContainAllKeys(keys: string[]): R;
        /** Use `.toContainAnyKeys` when checking if an object contains at least one of the provided keys. */
        toContainAnyKeys(keys: string[]): R;
        /** Use `.toContainValue` when checking if an object contains the provided value. */
        toContainValue(value: any): R;
        /** Use `.toContainValues` when checking if an object contains all of the provided values. */
        toContainValues(values: any[]): R;
        /** Use `.toContainAllValues` when checking if an object only contains all of the provided values. */
        toContainAllValues(values: any[]): R;
        /** Use `.toContainAnyValues` when checking if an object contains at least one of the provided values. */
        toContainAnyValues(values: any[]): R;
        /** Use `.toContainEntry` when checking if an object contains the provided entry. */
        toContainEntry(entry: [string, any]): R;
        /** Use `.toContainEntries` when checking if an object contains all of the provided entries. */
        toContainEntries(entries: [string, any][]): R;
        /** Use `.toContainAllEntries` when checking if an object only contains all of the provided entries. */
        toContainAllEntries(entries: [string, any][]): R;
        /** Use `.toContainAnyEntries` when checking if an object contains at least one of the provided entries. */
        toContainAnyEntries(entries: [string, any][]): R;
        /** Use `.toBeExtensible` when checking if an object is extensible. */
        toBeExtensible(): R;
        /** Use `.toBeFrozen` when checking if an object is frozen. */
        toBeFrozen(): R;
        /** Use `.toBeSealed` when checking if an object is sealed. */
        toBeSealed(): R;
        /** Use `.toBeString` when checking if a value is a `String`. */
        toBeString(): R;
        /** Use `.toEqualCaseInsensitive` when checking if a string is equal (===) to another ignoring the casing of both strings. */
        toEqualCaseInsensitive(string: string): R;
        /** Use `.toStartWith` when checking if a `String` starts with a given `String` prefix. */
        toStartWith(prefix: string): R;
        /** Use `.toEndWith` when checking if a `String` ends with a given `String` suffix. */
        toEndWith(suffix: string): R;
        /** Use `.toInclude` when checking if a `String` includes the given `String` substring. */
        toInclude(substring: string): R;
        /** Use `.toIncludeRepeated` when checking if a `String` includes the given `String` substring the correct number of times. */
        toIncludeRepeated(substring: string, times: number): R;
        /** Use `.toIncludeMultiple` when checking if a `String` includes all of the given substrings. */
        toIncludeMultiple(substrings: string[]): R;
    }
}
